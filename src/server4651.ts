
const express = require('express')
import {handler4651} from "./handler4651";
const app = express()
app.get('/4651', handler4651)
app.listen(3000, () => {})
        