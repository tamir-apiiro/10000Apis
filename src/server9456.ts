
const express = require('express')
import {handler9456} from "./handler9456";
const app = express()
app.get('/9456', handler9456)
app.listen(3000, () => {})
        