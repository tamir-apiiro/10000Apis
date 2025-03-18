
const express = require('express')
import {handler9059} from "./handler9059";
const app = express()
app.get('/9059', handler9059)
app.listen(3000, () => {})
        