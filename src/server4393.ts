
const express = require('express')
import {handler4393} from "./handler4393";
const app = express()
app.get('/4393', handler4393)
app.listen(3000, () => {})
        