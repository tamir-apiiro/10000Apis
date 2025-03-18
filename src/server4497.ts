
const express = require('express')
import {handler4497} from "./handler4497";
const app = express()
app.get('/4497', handler4497)
app.listen(3000, () => {})
        