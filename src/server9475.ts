
const express = require('express')
import {handler9475} from "./handler9475";
const app = express()
app.get('/9475', handler9475)
app.listen(3000, () => {})
        