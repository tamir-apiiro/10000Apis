
const express = require('express')
import {handler9437} from "./handler9437";
const app = express()
app.get('/9437', handler9437)
app.listen(3000, () => {})
        