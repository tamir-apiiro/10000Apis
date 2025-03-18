
const express = require('express')
import {handler9555} from "./handler9555";
const app = express()
app.get('/9555', handler9555)
app.listen(3000, () => {})
        