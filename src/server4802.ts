
const express = require('express')
import {handler4802} from "./handler4802";
const app = express()
app.get('/4802', handler4802)
app.listen(3000, () => {})
        