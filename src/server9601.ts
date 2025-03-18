
const express = require('express')
import {handler9601} from "./handler9601";
const app = express()
app.get('/9601', handler9601)
app.listen(3000, () => {})
        