
const express = require('express')
import {handler9086} from "./handler9086";
const app = express()
app.get('/9086', handler9086)
app.listen(3000, () => {})
        