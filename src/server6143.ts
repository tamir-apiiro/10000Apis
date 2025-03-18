
const express = require('express')
import {handler6143} from "./handler6143";
const app = express()
app.get('/6143', handler6143)
app.listen(3000, () => {})
        