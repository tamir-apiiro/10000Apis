
const express = require('express')
import {handler9693} from "./handler9693";
const app = express()
app.get('/9693', handler9693)
app.listen(3000, () => {})
        