
const express = require('express')
import {handler4820} from "./handler4820";
const app = express()
app.get('/4820', handler4820)
app.listen(3000, () => {})
        