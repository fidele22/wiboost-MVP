import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Wifi, Signal, Clock, Users, ArrowLeft, RefreshCw, Router, 
  Smartphone, Laptop, Tv, AlertTriangle, CheckCircle, 
  TrendingUp, TrendingDown, Activity, Globe, Shield,
  Download, Upload, Zap, Target, Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface NetworkMetrics {
  signalStrength: number;
  downloadSpeed: number;
  uploadSpeed: number;
  latency: number;
  jitter: number;
  packetLoss: number;
  connectedDevices: number;
  networkName: string;
  frequency: string;
  channel: number;
  securityType: string;
  bandwidth: string;
  congestion: number;
  uptime: number;
}

interface DeviceInfo {
  name: string;
  type: string;
  ip: string;
  connected: string;
  bandwidth: number;
  icon: any;
}

interface SpeedTest {
  timestamp: string;
  download: number;
  upload: number;
  ping: number;
}

const NetworkAnalyzer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [metrics, setMetrics] = useState<NetworkMetrics | null>(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [devices, setDevices] = useState<DeviceInfo[]>([]);
  const [speedHistory, setSpeedHistory] = useState<SpeedTest[]>([]);
  const [currentPhase, setCurrentPhase] = useState("");

  const simulateNetworkAnalysis = async () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setMetrics(null);
    setDevices([]);
    setSpeedHistory([]);

    const phases = [
      { step: 15, message: "Discovering network devices...", phase: "Device Discovery" },
      { step: 30, message: "Testing connection speeds...", phase: "Speed Testing" },
      { step: 45, message: "Analyzing signal strength patterns...", phase: "Signal Analysis" },
      { step: 60, message: "Evaluating network congestion...", phase: "Congestion Analysis" },
      { step: 75, message: "Checking security configuration...", phase: "Security Scan" },
      { step: 90, message: "Generating recommendations...", phase: "AI Analysis" },
      { step: 100, message: "Analysis complete!", phase: "Complete" }
    ];

    for (const { step, message, phase } of phases) {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setAnalysisProgress(step);
      setCurrentPhase(phase);
      toast.info(message);
    }

    // Generate comprehensive test data
    const simulatedMetrics: NetworkMetrics = {
      signalStrength: Math.floor(Math.random() * 40) + 60,
      downloadSpeed: Math.floor(Math.random() * 80) + 20,
      uploadSpeed: Math.floor(Math.random() * 30) + 10,
      latency: Math.floor(Math.random() * 40) + 10,
      jitter: Math.floor(Math.random() * 10) + 1,
      packetLoss: Math.random() * 3,
      connectedDevices: Math.floor(Math.random() * 15) + 8,
      networkName: "HomeNetwork_" + Math.floor(Math.random() * 1000),
      frequency: Math.random() > 0.6 ? "5 GHz" : "2.4 GHz",
      channel: Math.floor(Math.random() * 11) + 1,
      securityType: Math.random() > 0.7 ? "WPA3" : "WPA2",
      bandwidth: Math.random() > 0.5 ? "80 MHz" : "40 MHz",
      congestion: Math.floor(Math.random() * 60) + 20,
      uptime: Math.floor(Math.random() * 720) + 24
    };

    const simulatedDevices: DeviceInfo[] = [
      { name: "iPhone 15", type: "Mobile", ip: "192.168.1.101", connected: "2h 15m", bandwidth: 45, icon: Smartphone },
      { name: "MacBook Pro", type: "Laptop", ip: "192.168.1.102", connected: "5h 30m", bandwidth: 78, icon: Laptop },
      { name: "Samsung TV", type: "Smart TV", ip: "192.168.1.103", connected: "12h 5m", bandwidth: 25, icon: Tv },
      { name: "Echo Dot", type: "IoT", ip: "192.168.1.104", connected: "3d 2h", bandwidth: 2, icon: Router },
      { name: "iPad Air", type: "Tablet", ip: "192.168.1.105", connected: "1h 45m", bandwidth: 32, icon: Smartphone }
    ];

    const simulatedHistory: SpeedTest[] = Array.from({ length: 24 }, (_, i) => ({
      timestamp: `${23-i}:00`,
      download: Math.floor(Math.random() * 50) + 30,
      upload: Math.floor(Math.random() * 25) + 15,
      ping: Math.floor(Math.random() * 30) + 15
    }));

    setMetrics(simulatedMetrics);
    setDevices(simulatedDevices.slice(0, Math.min(simulatedMetrics.connectedDevices, 8)));
    setSpeedHistory(simulatedHistory);
    setIsAnalyzing(false);
    toast.success("Comprehensive network analysis completed!");
  };

  const getSignalQuality = (strength: number) => {
    if (strength >= 80) return { label: "Excellent", color: "bg-green-500", textColor: "text-green-600" };
    if (strength >= 60) return { label: "Good", color: "bg-blue-500", textColor: "text-blue-600" };
    if (strength >= 40) return { label: "Fair", color: "bg-yellow-500", textColor: "text-yellow-600" };
    return { label: "Poor", color: "bg-red-500", textColor: "text-red-600" };
  };

  const getSpeedQuality = (speed: number) => {
    if (speed >= 50) return { label: "Fast", color: "text-green-600" };
    if (speed >= 25) return { label: "Good", color: "text-blue-600" };
    if (speed >= 10) return { label: "Fair", color: "text-yellow-600" };
    return { label: "Slow", color: "text-red-600" };
  };

  const getNetworkHealth = () => {
    if (!metrics) return { status: "Unknown", color: "gray", icon: Activity };
    
    const healthScore = (
      (metrics.signalStrength / 100) * 0.3 +
      (Math.min(metrics.downloadSpeed, 100) / 100) * 0.3 +
      (Math.max(0, 100 - metrics.latency) / 100) * 0.2 +
      (Math.max(0, 100 - metrics.congestion) / 100) * 0.2
    ) * 100;

    if (healthScore >= 80) return { status: "Excellent", color: "green", icon: CheckCircle };
    if (healthScore >= 60) return { status: "Good", color: "blue", icon: TrendingUp };
    if (healthScore >= 40) return { status: "Fair", color: "yellow", icon: Activity };
    return { status: "Poor", color: "red", icon: AlertTriangle };
  };

  const generateAdvancedRecommendations = () => {
    if (!metrics) return [];

    const recommendations = [];

    // Signal strength recommendations
    if (metrics.signalStrength < 70) {
      recommendations.push({
        title: "Signal Strength Optimization",
        description: `Your signal strength is at ${metrics.signalStrength}%. Consider repositioning your router to a central location or adding a Wi-Fi extender in weak coverage areas.`,
        priority: "High",
        impact: "Coverage",
        solution: "Wi-Fi Extender + Router Repositioning"
      });
    }

    // Speed optimization
    if (metrics.downloadSpeed < 25) {
      recommendations.push({
        title: "Bandwidth Upgrade Needed",
        description: `Current download speed of ${metrics.downloadSpeed} Mbps may be insufficient for modern usage. Consider upgrading your internet plan or optimizing your network configuration.`,
        priority: "High",
        impact: "Performance",
        solution: "Internet Plan Upgrade"
      });
    }

    // Frequency band optimization
    if (metrics.frequency === "2.4 GHz" && metrics.congestion > 60) {
      recommendations.push({
        title: "Switch to 5 GHz Band",
        description: "High congestion detected on 2.4 GHz. Switching to 5 GHz band will provide better performance for nearby devices.",
        priority: "Medium",
        impact: "Speed",
        solution: "Dual-Band Configuration"
      });
    }

    // Channel optimization
    if (metrics.congestion > 70) {
      recommendations.push({
        title: "Channel Interference Detected",
        description: `Current channel ${metrics.channel} shows ${metrics.congestion}% congestion. Switching to a less crowded channel will improve performance.`,
        priority: "Medium",
        impact: "Stability",
        solution: "Automatic Channel Selection"
      });
    }

    // Device management
    if (metrics.connectedDevices > 15) {
      recommendations.push({
        title: "High Device Count Management",
        description: `${metrics.connectedDevices} devices connected. Consider implementing QoS rules and upgrading to a mesh network for better device management.`,
        priority: "Medium",
        impact: "Stability",
        solution: "Mesh Network + QoS"
      });
    }

    // Latency optimization
    if (metrics.latency > 30) {
      recommendations.push({
        title: "Latency Optimization",
        description: `High latency of ${metrics.latency}ms detected. Optimize your network settings and consider QoS prioritization for real-time applications.`,
        priority: "Medium",
        impact: "Gaming/Video Calls",
        solution: "QoS Configuration"
      });
    }

    // Security recommendations
    if (metrics.securityType !== "WPA3") {
      recommendations.push({
        title: "Security Upgrade",
        description: "Your network is using WPA2. Upgrading to WPA3 will provide enhanced security features and better protection.",
        priority: "Low",
        impact: "Security",
        solution: "WPA3 Upgrade"
      });
    }

    return recommendations;
  };

  const networkHealth = getNetworkHealth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" asChild>
                
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Advanced Network Analyzer</h1>
                <p className="text-muted-foreground">Comprehensive Wi-Fi performance analysis and optimization</p>
              </div>
            </div>
            <Button onClick={simulateNetworkAnalysis} disabled={isAnalyzing} size="lg">
              {isAnalyzing ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Signal className="h-4 w-4 mr-2" />
                  Start Deep Analysis
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Analysis Progress */}
        {isAnalyzing && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 animate-spin" />
                Comprehensive Network Analysis in Progress
              </CardTitle>
              <CardDescription>
                Running advanced diagnostics on your network infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Current Phase: {currentPhase}</span>
                <span className="text-sm text-muted-foreground">{analysisProgress}% complete</span>
              </div>
              <Progress value={analysisProgress} className="w-full h-3" />
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {metrics && !isAnalyzing && (
          <div className="space-y-8">
            {/* Network Health Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <networkHealth.icon className={`h-6 w-6 text-${networkHealth.color}-600`} />
                  Network Health: {networkHealth.status}
                </CardTitle>
                <CardDescription>
                  Overall assessment of your network performance and stability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Wifi className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{metrics.signalStrength}%</div>
                    <div className="text-sm text-muted-foreground">Signal Strength</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Download className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{metrics.downloadSpeed}</div>
                    <div className="text-sm text-muted-foreground">Mbps Download</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{metrics.latency}ms</div>
                    <div className="text-sm text-muted-foreground">Latency</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{metrics.connectedDevices}</div>
                    <div className="text-sm text-muted-foreground">Devices</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Analysis Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="devices">Devices</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Router className="h-5 w-5" />
                        Network Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Network Name</p>
                          <p className="font-semibold">{metrics.networkName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Frequency Band</p>
                          <Badge variant="secondary">{metrics.frequency}</Badge>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Channel</p>
                          <p className="font-semibold">{metrics.channel}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Bandwidth</p>
                          <p className="font-semibold">{metrics.bandwidth}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Security</p>
                          <Badge variant="outline">{metrics.securityType}</Badge>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Uptime</p>
                          <p className="font-semibold">{metrics.uptime}h</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        Network Quality Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Signal Quality</span>
                          <Badge variant="secondary" className={getSignalQuality(metrics.signalStrength).textColor}>
                            {getSignalQuality(metrics.signalStrength).label}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Congestion Level</span>
                          <span className="text-sm font-semibold">{metrics.congestion}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Packet Loss</span>
                          <span className="text-sm font-semibold">{metrics.packetLoss.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Jitter</span>
                          <span className="text-sm font-semibold">{metrics.jitter}ms</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Performance Tab */}
              <TabsContent value="performance" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Signal className="h-5 w-5" />
                        Signal Strength
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-3xl font-bold">{metrics.signalStrength}%</span>
                          <Badge variant="secondary">{getSignalQuality(metrics.signalStrength).label}</Badge>
                        </div>
                        <Progress value={metrics.signalStrength} className="w-full" />
                        <p className="text-xs text-muted-foreground">
                          Excellent: 80%+ | Good: 60-79% | Fair: 40-59% | Poor: &lt;40%
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Download className="h-5 w-5" />
                        Download Speed
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-3xl font-bold">{metrics.downloadSpeed}</span>
                          <span className="text-sm text-muted-foreground">Mbps</span>
                        </div>
                        <Progress value={(metrics.downloadSpeed / 100) * 100} className="w-full" />
                        <span className={`text-sm font-medium ${getSpeedQuality(metrics.downloadSpeed).color}`}>
                          {getSpeedQuality(metrics.downloadSpeed).label}
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Upload className="h-5 w-5" />
                        Upload Speed
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-3xl font-bold">{metrics.uploadSpeed}</span>
                          <span className="text-sm text-muted-foreground">Mbps</span>
                        </div>
                        <Progress value={(metrics.uploadSpeed / 50) * 100} className="w-full" />
                        <span className={`text-sm font-medium ${getSpeedQuality(metrics.uploadSpeed).color}`}>
                          {getSpeedQuality(metrics.uploadSpeed).label}
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Latency
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-3xl font-bold">{metrics.latency}</span>
                          <span className="text-sm text-muted-foreground">ms</span>
                        </div>
                        <Progress value={Math.max(0, 100 - metrics.latency)} className="w-full" />
                        <p className="text-xs text-muted-foreground">
                          Lower is better for gaming and video calls
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Speed History Chart Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>24-Hour Performance History</CardTitle>
                    <CardDescription>
                      Speed and latency trends over the past 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">Performance chart would display here</p>
                        <p className="text-sm text-muted-foreground">Showing download/upload speeds and latency over time</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Devices Tab */}
              <TabsContent value="devices" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Connected Devices ({devices.length})
                    </CardTitle>
                    <CardDescription>
                      All devices currently connected to your network
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {devices.map((device, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <device.icon className="h-8 w-8 text-primary" />
                            <div>
                              <p className="font-semibold">{device.name}</p>
                              <p className="text-sm text-muted-foreground">{device.ip}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary">{device.type}</Badge>
                            <p className="text-sm text-muted-foreground mt-1">
                              {device.bandwidth} Mbps • Connected {device.connected}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Recommendations Tab */}
              <TabsContent value="recommendations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      AI-Powered Optimization Recommendations
                    </CardTitle>
                    <CardDescription>
                      Personalized suggestions based on your network analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {generateAdvancedRecommendations().map((rec, index) => (
                        <div key={index} className="border rounded-lg p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold text-lg">{rec.title}</h4>
                                <Badge variant={
                                  rec.priority === "High" ? "destructive" : 
                                  rec.priority === "Medium" ? "default" : "secondary"
                                }>
                                  {rec.priority} Priority
                                </Badge>
                              </div>
                              <p className="text-muted-foreground mb-3">{rec.description}</p>
                              <div className="flex gap-4 text-sm">
                                <span className="flex items-center gap-1">
                                  <Zap className="h-4 w-4" />
                                  Impact: {rec.impact}
                                </span>
                                <span className="flex items-center gap-1">
                                  <CheckCircle className="h-4 w-4" />
                                  Solution: {rec.solution}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {generateAdvancedRecommendations().length === 0 && (
                        <div className="text-center py-12">
                          <CheckCircle className="h-16 w-16 mx-auto text-green-600 mb-4" />
                          <h3 className="text-xl font-semibold text-green-600 mb-2">Outstanding Network Performance!</h3>
                          <p className="text-muted-foreground max-w-md mx-auto">
                            Your network is performing exceptionally well across all metrics. No immediate optimizations are needed.
                          </p>
                        </div>
                      )}

                      {/* Professional recommendations */}
                      <Alert>
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle>Professional Wi-Fi Extender Recommendation</AlertTitle>
                        <AlertDescription>
                          Based on your analysis, our Wi-Fi Extender Pro system would provide optimal coverage for your home. 
                          Consider upgrading to eliminate dead zones and boost overall performance by up to 300%.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Getting Started */}
        {!metrics && !isAnalyzing && (
          <Card className="text-center py-16">
            <CardContent>
              <Signal className="h-20 w-20 mx-auto mb-6 text-muted-foreground" />
              <h3 className="text-3xl font-semibold mb-4">Advanced Network Analysis</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Run a comprehensive analysis of your Wi-Fi network to identify performance issues, 
                security vulnerabilities, and optimization opportunities. Our AI-powered tool provides 
                detailed insights and actionable recommendations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Signal strength mapping
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Speed testing
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Device analysis
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    AI recommendations
                  </span>
                </div>
              </div>
              <Button onClick={simulateNetworkAnalysis} size="lg" className="text-lg px-8 py-6">
                <Signal className="h-5 w-5 mr-2" />
                Start Comprehensive Analysis
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default NetworkAnalyzer;