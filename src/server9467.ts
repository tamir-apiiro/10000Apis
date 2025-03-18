
const express = require('express')
import {handler9467} from "./handler9467";
const app = express()
app.get('/9467', handler9467)
app.listen(3000, () => {})
        