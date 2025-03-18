
const express = require('express')
import {handler9270} from "./handler9270";
const app = express()
app.get('/9270', handler9270)
app.listen(3000, () => {})
        