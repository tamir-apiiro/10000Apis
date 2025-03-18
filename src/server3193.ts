
const express = require('express')
import {handler3193} from "./handler3193";
const app = express()
app.get('/3193', handler3193)
app.listen(3000, () => {})
        