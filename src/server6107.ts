
const express = require('express')
import {handler6107} from "./handler6107";
const app = express()
app.get('/6107', handler6107)
app.listen(3000, () => {})
        