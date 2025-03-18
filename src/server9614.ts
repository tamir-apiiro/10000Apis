
const express = require('express')
import {handler9614} from "./handler9614";
const app = express()
app.get('/9614', handler9614)
app.listen(3000, () => {})
        