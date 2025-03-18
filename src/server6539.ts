
const express = require('express')
import {handler6539} from "./handler6539";
const app = express()
app.get('/6539', handler6539)
app.listen(3000, () => {})
        