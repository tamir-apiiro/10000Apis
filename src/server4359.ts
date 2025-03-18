
const express = require('express')
import {handler4359} from "./handler4359";
const app = express()
app.get('/4359', handler4359)
app.listen(3000, () => {})
        