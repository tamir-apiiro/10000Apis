
const express = require('express')
import {handler9356} from "./handler9356";
const app = express()
app.get('/9356', handler9356)
app.listen(3000, () => {})
        