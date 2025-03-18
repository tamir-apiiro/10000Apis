
const express = require('express')
import {handler4898} from "./handler4898";
const app = express()
app.get('/4898', handler4898)
app.listen(3000, () => {})
        