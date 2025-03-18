
const express = require('express')
import {handler6698} from "./handler6698";
const app = express()
app.get('/6698', handler6698)
app.listen(3000, () => {})
        