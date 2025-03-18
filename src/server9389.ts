
const express = require('express')
import {handler9389} from "./handler9389";
const app = express()
app.get('/9389', handler9389)
app.listen(3000, () => {})
        