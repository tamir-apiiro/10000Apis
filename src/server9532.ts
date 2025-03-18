
const express = require('express')
import {handler9532} from "./handler9532";
const app = express()
app.get('/9532', handler9532)
app.listen(3000, () => {})
        