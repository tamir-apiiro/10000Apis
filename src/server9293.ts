
const express = require('express')
import {handler9293} from "./handler9293";
const app = express()
app.get('/9293', handler9293)
app.listen(3000, () => {})
        