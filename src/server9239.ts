
const express = require('express')
import {handler9239} from "./handler9239";
const app = express()
app.get('/9239', handler9239)
app.listen(3000, () => {})
        