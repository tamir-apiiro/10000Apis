
const express = require('express')
import {handler4701} from "./handler4701";
const app = express()
app.get('/4701', handler4701)
app.listen(3000, () => {})
        