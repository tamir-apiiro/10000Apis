
const express = require('express')
import {handler9718} from "./handler9718";
const app = express()
app.get('/9718', handler9718)
app.listen(3000, () => {})
        