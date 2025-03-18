
const express = require('express')
import {handler4275} from "./handler4275";
const app = express()
app.get('/4275', handler4275)
app.listen(3000, () => {})
        