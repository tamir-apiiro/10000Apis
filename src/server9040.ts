
const express = require('express')
import {handler9040} from "./handler9040";
const app = express()
app.get('/9040', handler9040)
app.listen(3000, () => {})
        