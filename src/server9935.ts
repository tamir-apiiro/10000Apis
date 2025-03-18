
const express = require('express')
import {handler9935} from "./handler9935";
const app = express()
app.get('/9935', handler9935)
app.listen(3000, () => {})
        