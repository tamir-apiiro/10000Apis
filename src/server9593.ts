
const express = require('express')
import {handler9593} from "./handler9593";
const app = express()
app.get('/9593', handler9593)
app.listen(3000, () => {})
        