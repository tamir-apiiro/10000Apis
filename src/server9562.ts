
const express = require('express')
import {handler9562} from "./handler9562";
const app = express()
app.get('/9562', handler9562)
app.listen(3000, () => {})
        