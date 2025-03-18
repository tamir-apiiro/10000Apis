
const express = require('express')
import {handler9519} from "./handler9519";
const app = express()
app.get('/9519', handler9519)
app.listen(3000, () => {})
        