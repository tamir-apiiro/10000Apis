
const express = require('express')
import {handler9560} from "./handler9560";
const app = express()
app.get('/9560', handler9560)
app.listen(3000, () => {})
        