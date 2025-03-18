
const express = require('express')
import {handler9124} from "./handler9124";
const app = express()
app.get('/9124', handler9124)
app.listen(3000, () => {})
        