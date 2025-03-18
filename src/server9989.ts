
const express = require('express')
import {handler9989} from "./handler9989";
const app = express()
app.get('/9989', handler9989)
app.listen(3000, () => {})
        