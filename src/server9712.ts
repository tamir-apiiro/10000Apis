
const express = require('express')
import {handler9712} from "./handler9712";
const app = express()
app.get('/9712', handler9712)
app.listen(3000, () => {})
        