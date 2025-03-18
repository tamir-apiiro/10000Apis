
const express = require('express')
import {handler9722} from "./handler9722";
const app = express()
app.get('/9722', handler9722)
app.listen(3000, () => {})
        