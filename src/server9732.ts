
const express = require('express')
import {handler9732} from "./handler9732";
const app = express()
app.get('/9732', handler9732)
app.listen(3000, () => {})
        