
const express = require('express')
import {handler9730} from "./handler9730";
const app = express()
app.get('/9730', handler9730)
app.listen(3000, () => {})
        