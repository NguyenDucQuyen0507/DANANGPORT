export default function getGreeting() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return "Chúc bạn buổi sáng tràn đầy năng lượng!";
  } else if (hour >= 12 && hour < 18) {
    return "Chúc bạn buổi chiều vui vẻ!";
  } else {
    return "Chúc bạn buổi tối ấm áp!";
  }
}
