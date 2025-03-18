
const express = require('express')
import {handler6595} from "./handler6595";
const app = express()
app.get('/6595', handler6595)
app.listen(3000, () => {})
        