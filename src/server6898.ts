
const express = require('express')
import {handler6898} from "./handler6898";
const app = express()
app.get('/6898', handler6898)
app.listen(3000, () => {})
        