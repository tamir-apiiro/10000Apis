
const express = require('express')
import {handler6156} from "./handler6156";
const app = express()
app.get('/6156', handler6156)
app.listen(3000, () => {})
        