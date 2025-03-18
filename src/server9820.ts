
const express = require('express')
import {handler9820} from "./handler9820";
const app = express()
app.get('/9820', handler9820)
app.listen(3000, () => {})
        