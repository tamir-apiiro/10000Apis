
const express = require('express')
import {handler9170} from "./handler9170";
const app = express()
app.get('/9170', handler9170)
app.listen(3000, () => {})
        