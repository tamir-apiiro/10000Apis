
const express = require('express')
import {handler9573} from "./handler9573";
const app = express()
app.get('/9573', handler9573)
app.listen(3000, () => {})
        