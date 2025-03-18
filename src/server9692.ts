
const express = require('express')
import {handler9692} from "./handler9692";
const app = express()
app.get('/9692', handler9692)
app.listen(3000, () => {})
        