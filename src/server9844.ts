
const express = require('express')
import {handler9844} from "./handler9844";
const app = express()
app.get('/9844', handler9844)
app.listen(3000, () => {})
        